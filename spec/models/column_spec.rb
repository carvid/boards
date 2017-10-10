# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Column, type: :model do
  it { should belong_to(:board) }
  it { should have_many(:tasks).dependent(:destroy) }
  it { should validate_presence_of(:title) }
  it { should validate_numericality_of(:position).only_integer }
end

