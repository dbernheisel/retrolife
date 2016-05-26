module Api
  class GameSerializer < ActiveModel::Serializer
    has_one :platform
    has_one :company
  end
end
