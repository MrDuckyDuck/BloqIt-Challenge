import axios from "axios";
import { BloqInterface } from "../../src/v1/interfaces";

describe("/tbd/v1/bloqs API Endpoints", () => {
  // Sample data for creating and updating bloqs
  const url = "http://localhost:3000/tbd/v1/bloqs";
  let createdBloqId: number = 0;

  // 1. Get All - Success
  it("GET /tbd/v1/bloqs - Success", async () => {
    const response = await axios.get<BloqInterface.Bloq[]>(url);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  // 2. Get All - Failure
  it("GET /tbd/v1/bloqs - Failure (invalid endpoint)", async () => {
    await axios
      .get<BloqInterface.Bloq[]>("http://localhost:3000/tbd/v1/bloqz")
      .catch((error) => expect(error.response.status).toBe(404));
  });

  // 3. Create - Success
  it("POST /tbd/v1/bloqs - Success", async () => {
    const newBloq = {
      title: "Test Bloq",
      address: "123 Main St, Anytown, USA",
    };
    const response = await axios.post<BloqInterface.Bloq>(url, newBloq);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
    expect(response.data.address).toBe(newBloq.address);
    createdBloqId = response.data.id;
  });

  // 4. Create - Failure (missing required fields)
  it("POST /tbd/v1/bloqs - Failure (missing fields)", async () => {
    const newBloq = {
      address: "123 Main St, Anytown, USA",
    };
    await axios
      .post<BloqInterface.Bloq>(url, newBloq)
      .catch((error) => expect(error.response.status).toBe(500));
  });

  // 5. Get By ID - Success
  it("GET /tbd/v1/bloqs/:id - Success", async () => {
    const response = await axios.get<BloqInterface.Bloq>(
      `${url}/${createdBloqId}`
    );
    expect(response.status).toBe(200);
    expect(response.data.id).toBe(+createdBloqId);
  });

  // 6. Get By ID - Failure (non-existent ID)
  it("GET /tbd/v1/bloqs/:id - Failure (non-existent ID)", async () => {
    const response = await axios.get<BloqInterface.Bloq>(`${url}/2000`);
    expect(response.status).toBe(204);
    expect(response.data.id).not.toBeDefined();
  });

  // 7. Update By ID - Success
  it("PUT /tbd/v1/bloqs/:id - Success", async () => {
    const updatedBloq = {
      title: "Updated Bloq",
    };
    const response = await axios.put<BloqInterface.Bloq>(
      `${url}/${createdBloqId}`,
      updatedBloq
    );
    expect(response.status).toBe(200);
    expect(response.data.title).toBe(updatedBloq.title);
  });

  // 8. Update By ID - Failure (non-existent ID)
  it("PUT /tbd/v1/bloqs/:id - Failure (non-existent ID)", async () => {
    const updatedBloq = {
      title: "Updated Bloq",
    };
    const response = await axios.put<BloqInterface.Bloq>(
      `${url}/2000`,
      updatedBloq
    );
    console.log(response.data);
    expect(response.status).toBe(204);
    expect(response.data.title).not.toBeDefined();
  });
});
