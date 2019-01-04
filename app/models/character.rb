class Character < ApplicationRecord
  belongs_to :region
  validates :name, presence: true
end
