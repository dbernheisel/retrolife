class PublisherGame < ApplicationRecord
  belongs_to :publisher
  belongs_to :game
end
