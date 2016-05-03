module Api
  class PublishersController < ApplicationController
    def index
      render json: Company.publishers.all
    end

    def show
      render json: Company.publishers.find_by(id: params[:id])
    end
  end
end