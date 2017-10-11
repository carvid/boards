# frozen_string_literal: true

FactoryGirl.define do
  factory :board do
    sequence(:title) { |n| "Board #{n}" }
  end
end

