module Api
  class CompanySerializer < ActiveModel::Serializer
    attributes :id, :name, :founded_on, :disbanded_on, :created_at, :updated_at
    # has_many :games
    # has_many :platforms

  #   filter :role,
  #     apply: ->(records, values, _options) {
  #       result = values.reduce(records) do |result_records, v|
  #         result_records.send(v)
  #       end
  #       return result
  #     },
  #     verify: ->(values, context) {
  #       values.map!(&:pluralize)
  #       values.select { |v| ['publishers', 'developers', 'manufacturers'].include? v }
  #     }
  end
end
