class Post < ApplicationRecord
  has_many :comments
  validates :article, :author, :category, presence: true
  validates :title, presence: true, uniqueness: { case_sensitive: false }
end
