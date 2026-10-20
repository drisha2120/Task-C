
import { useState } from 'react'

function NewPost() {
  const [type, setType] = useState('Question')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [abstract, setAbstract] = useState('')
  const [article, setArticle] = useState('')
  const [tags, setTags] = useState('')
  const [popup, setPopup] = useState('')

  function handlePost(e) {
    e.preventDefault()

    if (!title.trim() || !tags.trim()) {
      setPopup('Please enter a title and tags.')
      return
    }

    if (type === 'Question' && !description.trim()) {
      setPopup('Please enter the problem description.')
      return
    }

    if (type === 'Article' && (!abstract.trim() || !article.trim())) {
      setPopup('Please enter the abstract and article text.')
      return
    }

    const tagList = tags.split(',').filter(tag => tag.trim() !== '')

    if (tagList.length > 3) {
      setPopup('Please enter a maximum of three tags.')
      return
    }

    setPopup('Your post has been sent successfully!')

    setTitle('')
    setDescription('')
    setAbstract('')
    setArticle('')
    setTags('')
  }

  return (
    <>
      <main className="mx-auto my-10 max-w-3xl rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-3xl font-bold">Create a New Post</h1>

        <div className="mb-6 flex gap-6">
          <label>
            <input
              type="radio"
              checked={type === 'Question'}
              onChange={() => setType('Question')}
            />{' '}
            Question
          </label>

          <label>
            <input
              type="radio"
              checked={type === 'Article'}
              onChange={() => setType('Article')}
            />{' '}
            Article
          </label>
        </div>

        <form onSubmit={handlePost} className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold">Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter your title"
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          {type === 'Question' ? (
            <div>
              <label className="mb-2 block font-semibold">
                Problem Description
              </label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Describe your problem"
                rows={6}
                className="w-full rounded-lg border border-gray-300 p-3"
              />
            </div>
          ) : (
            <>
              <div>
                <label className="mb-2 block font-semibold">Abstract</label>
                <textarea
                  value={abstract}
                  onChange={e => setAbstract(e.target.value)}
                  placeholder="Enter the abstract"
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 p-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-semibold">Article Text</label>
                <textarea
                  value={article}
                  onChange={e => setArticle(e.target.value)}
                  placeholder="Write your article"
                  rows={8}
                  className="w-full rounded-lg border border-gray-300 p-3"
                />
              </div>
            </>
          )}

          <div>
            <label className="mb-2 block font-semibold">Tags</label>
            <input
              value={tags}
              onChange={e => setTags(e.target.value)}
              placeholder="React, JavaScript, Web Development"
              className="w-full rounded-lg border border-gray-300 p-3"
            />
            <p className="mt-1 text-sm text-gray-500">
              Separate tags with commas. Enter up to three tags.
            </p>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700"
          >
            Post
          </button>
        </form>
      </main>

      {popup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-xl">
            <h2 className="mb-3 text-xl font-bold text-teal-700">
              {popup.startsWith('Your post') ? 'Success!' : 'Check your post'}
            </h2>

            <p className="mb-5 text-gray-700">{popup}</p>

            <button
              onClick={() => setPopup('')}
              className="rounded-lg bg-teal-600 px-6 py-2 font-semibold text-white hover:bg-teal-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default NewPost
