class Role < ApplicationRecord
  has_many :company_roles
  has_many :companies, through: :company_roles

  def self.publisher
    @publisher_role ||= Role.find_by(name: 'Publisher')
  end

  def self.manufacturer
    @manufacturer_role ||= Role.find_by(name: 'Manufacturer')
  end

  def self.developer
    @developer_role ||= Role.find_by(name: 'Developer')
  end
end
