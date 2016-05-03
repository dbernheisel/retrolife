class Publisher < ApplicationRecord
  has_many :publisher_games
  has_many :games, through: :publisher_games
  has_many :platforms

  validates :name, presence: true, uniqueness: true
end
