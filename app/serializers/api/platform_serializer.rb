module Api
  class PlatformSerializer < ActiveModel::Serializer
    attributes :id, :name, :released_on, :retired_on, :created_at, :updated_at
    has_one :company
    has_many :games
  end
end
