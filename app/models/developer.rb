class Developer < ApplicationRecord
  has_many :developer_games
  validates :name, presence: true, uniqueness: true
end
