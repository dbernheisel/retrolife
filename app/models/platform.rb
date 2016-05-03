class Platform < ApplicationRecord
  has_many :platform_games
  has_many :games, through: :platform_games
  belongs_to :company

  validates :name, presence: true, uniqueness: true
end
