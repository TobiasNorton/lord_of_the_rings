class Character < ApplicationRecord
  belongs_to :regions
  validates :name, presence: true
end
