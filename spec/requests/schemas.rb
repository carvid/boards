# frozen_string_literal: true

shared_context 'response schemas' do
  let :board_schema do
    {
      id: an_instance_of(Integer),
      title: an_instance_of(String),
      columns: be_empty.or(array_including(column_schema)),
    }
  end

  let :column_schema do
    {
      id: an_instance_of(Integer),
      title: an_instance_of(String),
      position: an_instance_of(Integer),
      tasks: be_empty.or(array_including(task_schema)),
    }
  end

  let :task_schema do
    {
      id: an_instance_of(Integer),
      title: an_instance_of(String),
      position: an_instance_of(Integer),
    }
  end
end

