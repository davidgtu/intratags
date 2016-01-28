json.array!(@tags) do |tag|
  json.extract! tag, :id, :name, :color, :order
  json.url tag_url(tag, format: :json)
end
