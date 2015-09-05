# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  concept_id :integer
#  idea_id    :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ActiveRecord::Base
  belongs_to :concept
  belongs_to :idea
  belongs_to :user
end
