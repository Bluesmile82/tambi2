# == Schema Information
#
# Table name: matches
#
#  id           :integer          not null, primary key
#  concept_a_id :integer
#  concept_b_id :integer
#  api          :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer
#

require 'test_helper'

class MatchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
