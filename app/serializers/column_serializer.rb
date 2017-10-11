# frozen_string_literal: true

class ColumnSerializer < ActiveModel::Serializer
  attributes :id, :title, :position
  has_many :tasks
end

