module Api
  class CompaniesController < ApplicationController
    def index
      meta = {}
      records = case params[:filter_role]
                when 'manufacturer'; Company.all.manufacturers
                when 'developer'; Company.all.developers
                when 'publisher'; Company.all.publishers
                else; Company.all
                end
        render json: records, each_serializer: CompanySerializer
    end

    def show
      render json: Company.find_by(id: params[:id])
    end
  end
end