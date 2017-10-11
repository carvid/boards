# frozen_string_literal: true

FactoryGirl.define do
  factory :task do
    sequence(:title) { |n| "Task #{n}" }
    sequence(:position) { |n| n }
    column
  end
end

