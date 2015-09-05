# == Schema Information
#
# Table name: links
#
#  id         :integer          not null, primary key
#  idea_a_id  :integer
#  idea_b_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

require 'test_helper'

class LinkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
