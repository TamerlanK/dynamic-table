import { users as DATA } from "./data.js"

const root = document.getElementById("root")

const table = document.createElement("table")
table.className = "w-full bg-white shadow-lg overflow-hidden"
root.appendChild(table)

const thead = document.createElement("thead")
const tbody = document.createElement("tbody")

table.append(thead, tbody)

const keys = DATA.reduce((acc, user) => {
  const keys = Object.keys(user)
  return keys.length > acc.length ? keys : acc
}, [])

const headingRow = document.createElement("tr")
keys.forEach((key) => {
  const th = document.createElement("th")
  th.className = "px-4 py-2 text-left bg-gray-800 text-white font-semibold"
  th.textContent = key.charAt(0).toUpperCase() + key.slice(1)
  headingRow.appendChild(th)
})
thead.appendChild(headingRow)

DATA.forEach((user, index) => {
  const row = document.createElement("tr")
  row.className = index % 2 === 0 ? "bg-gray-100" : "bg-white"
  keys.forEach((key) => {
    const td = document.createElement("td")
    td.className = "px-4 py-2 border border-gray-300"
    td.textContent = user[key] || ""
    row.appendChild(td)
  })
  tbody.appendChild(row)
})
