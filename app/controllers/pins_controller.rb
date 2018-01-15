  class PinsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  before_action :set_pin, only: [:show]

  def index
    search = params[:term].present? ? params[:term] : nil
    @pins = if search
      Pin.search(search, fields: [:title, :description])
    else
      @pins = Pin.all.order("created_at DESC")
    end
  end

  def show
  end

  def new
    @pin = Pin.new
  end

  def create
    @pin = current_user.pins.new(pin_params)

    if @pin.save 
        redirect_to pins_path, notice: 'Pin has been created!'
    else
        render :new
    end
  end

  def autocomplete
    render json: Pin.search(params[:query], {
      fields: ["title^5", "description"],
      match: :word_start,
      limit: 10,
      load: false,
      misspellings: {below: 5}
    }).map(&:title)
  end

  private

  	def set_pin
      @pin = Pin.find(params[:id])
  	end

  	def pin_params
      params.require(:pin).permit(:title, :description, :main_image, :thumb_image)
  	end
end
