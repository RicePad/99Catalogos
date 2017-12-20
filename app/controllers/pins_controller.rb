class PinsController < ApplicationController
  
  def index
 	@pins = Pin.all
  end


  def show

  end

  private

  	def set_pin
  		@pin = Pin.find(params[:id])
  	end

  	def pin_params

  	end
end
