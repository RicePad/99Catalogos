class Api::V1::PinsController < ApplicationController
	skip_before_action :verify_authenticity_token

	def index
		@pins = Pin.all
		render json: @pins
	end

	def show
		@pin = Pin.find(params[:id])
		render json: @pin
	end

end