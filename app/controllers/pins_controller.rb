class PinsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  before_action :set_pin, only: [:show]

  def index
 	  @pins = Pin.all.order("created_at DESC")
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

  private

  	def set_pin
      @pin = Pin.find(params[:id])
  	end

  	def pin_params
      params.require(:pin).permit(:title, :description, :main_image, :thumb_image)
  	end
end
