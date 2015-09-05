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

class Link < ActiveRecord::Base
  belongs_to :idea_a, class_name: "Idea"
  belongs_to :idea_b, class_name: "Idea"
end
