class PinsController < ApplicationController
  before_action :set_pin, only: [:show]

  def index
 	  @pins = Pin.all.order("created_at DESC")
  end

  def show
  end

  private

  	def set_pin
      @pin = Pin.find(params[:id])
  	end

  	def pin_params
      params.require(:pin).permit(:title, :description, :main_image, :thumb_image)
  	end
end
