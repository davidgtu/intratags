class Tag
  include Mongoid::Document
  field :name, type: String
  field :color, type: String
  field :order, type: Integer
end
