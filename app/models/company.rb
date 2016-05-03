class Company < ApplicationRecord
  has_many :company_games
  has_many :company_roles
  has_many :roles, through: :company_roles
  has_many :games, through: :company_games

  validates :name, presence: true, uniqueness: true

  scope :publishers, -> { joins(:company_roles).where('company_roles.role_id = ?', Role.publisher.id).distinct }
  scope :developers, -> { joins(:company_roles).where('company_roles.role_id = ?', Role.developer.id).distinct }
  scope :manufacturers, -> { joins(:company_roles).where('company_roles.role_id = ?', Role.manufacturer.id).distinct }
end
