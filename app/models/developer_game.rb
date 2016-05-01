class DeveloperGame < ApplicationRecord
  belongs_to :game
  belongs_to :developer
end
