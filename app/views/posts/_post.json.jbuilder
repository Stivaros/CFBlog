json.extract! post, :id, :article, :author, :publish_date, :category, :created_at, :updated_at
json.url post_url(post, format: :json)
