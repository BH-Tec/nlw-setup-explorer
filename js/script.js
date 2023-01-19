const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-01', '01-02', '01-06'],
  water: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07', '01-08', '01-09', '01-10', '01-11', '01-12'],
  gym: ['01-01', '01-02', '01-06'],
  code: ['01-02', '01-04', '01-06', '01-09', '01-10', '01-11', '01-12', '01-13', '01-16', '01-17', '01-18', '01-19']
}

nlwSetup.setData(data)
nlwSetup.load()