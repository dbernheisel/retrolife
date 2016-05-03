module Seeds
  def self.seed_roles
    [
      'Manufacturer',
      'Publisher',
      'Developer'
    ].each { |role_name| Role.find_or_create_by(name: role_name) }
  end
end
