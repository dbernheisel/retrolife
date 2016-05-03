module Seeds
  def self.sprout
    Dir.glob("#{Rails.root}/db/seeds/*.rb") { |f| require_relative f }
    self.methods.select { |s| /seed_/.match(s.to_s) }.each do |seed|
      seed_name = seed.to_s.gsub('seed_','')
      print "Seeding #{seed_name}..."
      Seeds.send(seed)
      puts "\rSeeded #{seed_name}    "
    end
  end
end

Seeds.sprout
