module Api
  class ManufacturersController < JSONAPI::ResourceController
    def index
      render json: Company.manufacturers.all
    end

    def show
      render json: Company.manufacturers.find_by(id: params[:id])
    end
  end
end