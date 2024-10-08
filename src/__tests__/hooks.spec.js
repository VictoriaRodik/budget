import { renderHook, act, waitFor } from "@testing-library/react";
import { useBooleanToggle, useData } from "../hooks";
import { getItems } from "../utils/indexDB";

jest.mock("../utils/indexDB", () => ({
  getItems: jest.fn(),
}));

describe("useBooleanToggle hook", () => {
  it("should handle toggle", () => {
    const { result } = renderHook(() => useBooleanToggle());
    expect(result.current.status).toBe(false);
    act(() => result.current.handleStatusChange());
    expect(result.current.status).toBe(true);
  });
});

describe("useData hook", () => {
  beforeEach(() => {
    getItems.mockImplementation(() => Promise.resolve([{ value: 1 }]));
  });

  it("should get empty transactions", () => {
    const { result } = renderHook(() => useData());
    expect(result.current.transactions).toEqual([]);
  });

  it("should set status to PENDING", () => {
    const { result } = renderHook(() => useData());
    expect(result.current.status).toBe("PENDING");
  });

  it("should set mocked transactions", async () => {
    const { result, rerender } = renderHook(() => useData());
    rerender();
    await waitFor(() => {
      expect(result.current.transactions).toEqual([{ value: 1 }]);
    });
  });

  it("should set status SUCCESS", async () => {
    const { result, rerender } = renderHook(() => useData());
    rerender();
    await waitFor(() => {
      expect(result.current.status).toBe("SUCCESS");
    });
  });
});
