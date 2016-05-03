module Api
  class DevelopersController < ApplicationController
    def index
      render json: Company.developers.all
    end

    def show
      render json: Company.developers.find_by(id: params[:id])
    end
  end
end