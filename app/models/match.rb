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

class Match < ActiveRecord::Base
  belongs_to :concept_a, class_name: "Concept"
  belongs_to :concept_b, class_name: "Concept"
  belongs_to :user
end
