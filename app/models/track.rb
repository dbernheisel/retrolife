class Track < ApplicationRecord
  belongs_to :music_album, optional: true

  validates :format, presence: true
end
