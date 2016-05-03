class CompanyGame < ApplicationRecord
  belongs_to :game
  belongs_to :company

  validates :game_id, presence: true
  validates :company_id, presence: true, uniqueness: { scope: [:game_id ] }
end
