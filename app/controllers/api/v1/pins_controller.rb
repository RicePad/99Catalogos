class Api::V1::PinsController < ApplicationController
	before_action :authenticate_user!, except: [:index, :show]
	skip_before_action :verify_authenticity_token

	def index
		@pins = Pin.all.order("created_at DESC")
		render json: @pins
	end

	def create
		@pin = current_user.pins.new(pin_params)
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