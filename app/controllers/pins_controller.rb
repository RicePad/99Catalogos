class PinsController < ApplicationController
  before_action :set_pin, only: [:show]

  def index
 	@pins = Pin.all
  end


  def show

  end

  private

  	def set_pin
  	end

  	def pin_params
      @pin = Pin.find(params[:id])

  	end
end
