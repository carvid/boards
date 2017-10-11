# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
boards = Board.create(
  [
    { title: 'Board 1' },
    { title: 'Board 2' },
    { title: 'Board 3' },
  ]
)

columns = boards.map do |board|
  board.columns.create(
    [
      { title: 'Column 1', position: 1 },
      { title: 'Column 2', position: 2 },
      { title: 'Column 3', position: 3 },
    ]
  )
end.flatten

columns.each do |column|
  column.tasks.create(
    [
      { title: 'Column 1', position: 1 },
      { title: 'Column 2', position: 2 },
      { title: 'Column 3', position: 3 },
    ]
  )
end

