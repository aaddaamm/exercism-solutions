defmodule HighSchoolSweetheart do
  def first_letter(name) do
    name |> String.trim() |> String.first()
  end

  def initial(name) do
    "#{name |> first_letter() |> String.upcase()}."
  end

  def initials(full_name) do
    [first_name, last_name] = String.split(full_name)
    "#{first_letter(first_name)}. #{first_letter(last_name)}."
  end

  def pair(full_name1, full_name2) do
    [first_name1, last_name1] = String.split(full_name1)
    [first_name2, last_name2] = String.split(full_name2)

    sweethearts =
      "#{initial(first_name1)} #{initial(last_name1)}  +  #{initial(first_name2)} #{initial(last_name2)}"

    """
    ❤-------------------❤
    |  #{sweethearts}  |
    ❤-------------------❤
    """
  end
end
