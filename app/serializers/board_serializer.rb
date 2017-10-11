# frozen_string_literal: true

class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :columns
end

