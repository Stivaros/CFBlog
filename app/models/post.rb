class Post < ApplicationRecord
  has_many :comments
  validates :title, :article, :author, :category, presence: true
end
