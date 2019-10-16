import mock from 'mockjs'

var data = mock.mock('aaa/bbb.php', {
  'list|100': [{
    'id': '@GUID',
    'title': '@TITLE',
    'userId': '@GUID',
    'userName': '@CNAME' + '@CNAME' + '@CNAME',
    'answerCount': '@INTEGER(1,300)',
    'starCount': '@INTEGER(1,300)',
    'agreeCount': '@INTEGER(1,300)',
    'disagreeCount': '@INTEGER(1,300)',
    'discussCount': '@INTEGER(1,300)',
    'comment': '@PARAGRAPH'
  }]
})

export default data