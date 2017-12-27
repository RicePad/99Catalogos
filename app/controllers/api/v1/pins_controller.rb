class Api::V1::PinsController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		@pins = Pin.all
		render json: @pins
	end

	def create
		@pin = Pin.create(pin_params)
		render json: @pin
	end

	def show
		@pin = Pin.find(params[:id])
		render json: @pin
	end


	private

		def pin_params
	      params.require(:pin).permit(:title, :description, :main_image, :thumb_image)
	  	end
end