# frozen_string_literal: true

FactoryGirl.define do
  factory :column do
    sequence(:title) { |n| "Column #{n}" }
    sequence(:position) { |n| n }
    board
  end
end

