module Api
  class DeveloperSerializer < ActiveModel::Serializer
    attributes :id, :name, :founded_on, :disbanded_on, :updated_at, :created_at
  end
end
