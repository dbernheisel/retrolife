module Api
  class PublishersController < JSONAPI::ResourceController
    def index
      render json: Company.publishers.all
    end

    def show
      render json: Company.publishers.find_by(id: params[:id])
    end
  end
end